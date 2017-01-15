System.register(["@angular/platform-browser", "@angular/core", "@angular/forms", "@angular/http", "./app.component", "./app-routing.module", "./login/login-form.component", "./dashboard/dashboard-form.component", "./usersList/users-list-form.component", "./_guards/auth.user-guard", "./_guards/auth.admin-guard", "./_services/authentication.service", "./_services/user.service", "./_providers/error.handler"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var platform_browser_1, core_1, forms_1, http_1, app_component_1, app_routing_module_1, login_form_component_1, dashboard_form_component_1, users_list_form_component_1, auth_user_guard_1, auth_admin_guard_1, authentication_service_1, user_service_1, error_handler_1, AppModule;
    return {
        setters: [
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_module_1_1) {
                app_routing_module_1 = app_routing_module_1_1;
            },
            function (login_form_component_1_1) {
                login_form_component_1 = login_form_component_1_1;
            },
            function (dashboard_form_component_1_1) {
                dashboard_form_component_1 = dashboard_form_component_1_1;
            },
            function (users_list_form_component_1_1) {
                users_list_form_component_1 = users_list_form_component_1_1;
            },
            function (auth_user_guard_1_1) {
                auth_user_guard_1 = auth_user_guard_1_1;
            },
            function (auth_admin_guard_1_1) {
                auth_admin_guard_1 = auth_admin_guard_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (error_handler_1_1) {
                error_handler_1 = error_handler_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        app_routing_module_1.AppRoutingModule],
                    declarations: [app_component_1.AppComponent,
                        login_form_component_1.LoginFormComponent,
                        dashboard_form_component_1.DashboardFormComponent,
                        users_list_form_component_1.UsersListFormComponent],
                    bootstrap: [app_component_1.AppComponent],
                    providers: [auth_user_guard_1.AuthUserGuard,
                        auth_admin_guard_1.AuthAdminGuard,
                        authentication_service_1.AuthenticationService,
                        user_service_1.UserService,
                        { provide: core_1.ErrorHandler, useClass: error_handler_1.MyErrorHandler }]
                }),
                __metadata("design:paramtypes", [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map