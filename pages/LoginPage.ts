// Locators and methods related to login page ONLY

import { Locator, Page } from "@playwright/test";


// Page - test- data

export class LoginPage{
    // Properties - Locators for Login page test

    page : Page
    username : Locator
    password : Locator
    loginBtn : Locator
    homePageIdentifier : Locator
    errorMsg : Locator

    // Initialised the locators inside the constructor
    constructor(page : Page){
        this.page = page
        this.username = this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginBtn = this.page.locator("#login")
        this.errorMsg = this.page.locator("#toast-container")
        this.homePageIdentifier = this.page.locator("[routerlink='/dashboard/myorders']")
    }

    // methods
    async launchURL(url:string){
        await this.page.goto(url)
    }

    async loginIntoApplication(username:string, password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    async invalidLogin(username:string, password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }






}