import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from 'app/navigation/services/navigation.service';
import { ProfileService } from 'shared';
import { User } from 'shared/models/user.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.less']
})
export class EditProfileComponent implements OnInit {

  profileForm!: FormGroup;
  currentUserId: number = 1;

  showEditor: boolean = false;
  showFirstNameError: boolean = true;
  showLastNameError: boolean = true;
  showPhoneError: boolean = true;
  showSiteUrlError: boolean = true;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(255)]],
      lastName: ['', [Validators.required, Validators.maxLength(255)]],
      email: [{value: '', disaibled: true}],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(10), Validators.maxLength(10)]],
      siteUrl: ['', [Validators.pattern(/^https?:\/\/.+/i)]]
    })
    this._loadProfile();

    this.navigationService.selectNav('profile');
  }

  private _loadProfile(): void {
    this.profileService.getUserById(this.currentUserId).subscribe((user: User) => {
      if (user) {
        this.profileForm.patchValue({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          siteUrl: user.siteUrl
        });
        this.showEditor = true;
      }
    });
    
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const updatedUser: User = {
        id: this.currentUserId,
        ...this.profileForm.value,
      };
  
      this.profileService.updateUserProfile(updatedUser).subscribe(
        () => {
          this.profileService.setEditMessage$('Profile updated successfully');
        },
        (error) => {
          console.error('Failed to update profile:', error);
          this.profileService.setEditMessage$("The user is not updated: " + error.message)
        }
      );
    } else {
      this.showFirstNameError = true;
      this.showLastNameError = true;
      this.showPhoneError = true;
      this.showSiteUrlError = true;
    }
  }

  closeError(controlName: string): void {
    switch (controlName) {
      case 'firstName':
        this.showFirstNameError = false;
        break;
      case 'lastName':
        this.showLastNameError = false;
        break;
      case 'phone':
        this.showPhoneError = false;
        break;
      case 'siteUrl':
        this.showSiteUrlError = false;
        break;
    }
  }
  
}
