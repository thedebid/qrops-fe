import { Component } from '@angular/core';
import { FormInputComponent } from '../../shared/components/form-input/form-input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import {
  Eye,
  EyeOff,
  Lock,
  LucideAngularModule,
  LucideLoaderCircle,
  Mail,
} from 'lucide-angular';
import { toast } from 'ngx-sonner';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { cn } from '../../shared/utils/cn';
import { TokenService } from '../../core/services/token.service';
import { AppConstants } from '../../shared/constants/app.constants';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [
    ButtonComponent,
    LucideAngularModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  readonly EyeIcon = Eye;
  readonly EyeOffIcon = EyeOff;
  readonly MailIcon = Mail;
  readonly LockIcon = Lock;
  readonly LucideLoaderCircleIcon = LucideLoaderCircle;

  showPassword: boolean = false;
  isLoading = false;

  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;

  cn = cn;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  forgotPassword() {
    toast.info(AppConstants.FEATURE_IN_DEVELOPMENT_PROGRESS_MESSAGE);
  }

  register() {
    toast.info(AppConstants.PLANNED_FEATURE_MESSAGE);
  }

  handleSubmit() {
    this.submitted = true;
    const { email, password } = this.form.value;
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(email, password).subscribe({
      next: (response: { data: any; message: string }) => {
        this.isLoading = false;
        const { data, message } = response;
        this.tokenService.setToken(data.accessToken);
        this.authService.setLoggedIn(true);
        toast.success(message);
        this.router.navigate(['/dashboard']);
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        if (err.status === 0) {
          toast.error('Error: Server is down');
          return;
        }
        if (err.status === 500) {
          toast.error(err?.error);
          return;
        }
        if (err.status === 503) {
          toast.error(
            'Error: Unable to find the required service instance. Please try again later.'
          );
          return;
        }
        toast.error(err.error?.message);
      },
    });
  }
}
