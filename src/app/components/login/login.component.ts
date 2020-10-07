import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../core/services/language/language.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private router: Router,
        private route: ActivatedRoute,
        private languageService: LanguageService,
        translateService: TranslateService
    ) {
        translateService.setTranslation(
            this.languageService.LANGUAGE_PREFERENCES,
            this.languageService.getTranslationFile('login'),
            true
        );
    }

    /**
     * Init component view
     */
    public ngOnInit(): void {
        this.loginForm = this.buildForm();
    }

    /**
     * Submits the form
     */
    public submit(): void {
        this.loginService.login(this.loginForm.getRawValue())
            .then(() => this.router.navigate(['/main'], {relativeTo: this.route}))
            .catch((error) => {
                console.error(error);
            });
    }

    /**
     * Build the login form
     * @returns {FormGroup}
     */
    private buildForm(): FormGroup {
        return this.formBuilder.group({
            login: [null, Validators.required],
            password: [null, Validators.required]
        });
    }

}
