import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddUser } from 'src/app/models/AddUser';
import { AddUserResponse } from 'src/app/models/AddUserResponse';
import { AddUserService } from 'src/app/services/add-user/add-user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm = this._formBuilder.group(
    {
      name: ['', [Validators.required]],
      job: ['', [Validators.required]],
    }
  )

  user:AddUserResponse = {
    createdAt: '',
    id: '',
    job: '',
    name: ''
  }

  visible: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _addUserService: AddUserService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const isFormValid = this.addUserForm.valid;
    if (isFormValid) {
      const body: AddUser = {
        name: this.addUserForm.controls['name'].value,
        job: this.addUserForm.controls['job'].value,
      }
      this._addUserService.addUser(body).subscribe((response: AddUserResponse) => {
        this.user = response;
      })
    } else {
      this.visible = true;
    }
  }

  delay (ms: number): Promise<void> {
    return new Promise(res => setTimeout(res, ms));
  };

  async onShown(): Promise<void> {
    await this.delay(2000);
    this.visible = false;
  }
}
