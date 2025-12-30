// Locators and methods related to dashboard page ONLY

import { Locator, Page } from "@playwright/test";


export class DashboardPage{

    page: Page
    products : Locator
    addToCartSuccessMsg : Locator
    viewProductName : Locator
    viewProductPrice : Locator

    constructor(page:Page){
        this.page = page
        this.products = this.page.locator("div.card-body")
        this.addToCartSuccessMsg = this.page.locator("#toast-container")
        this.viewProductName = this.page.locator("div.rtl-text h2")
        this.viewProductPrice = this.page.locator("div.rtl-text h3")
    }

    async searchAndAddProductToCart(productName:string){
        await this.products.last().waitFor()
        // count() - Return the total number of matching element
        const countOfProducts = await this.products.count()

        for(let i=0; i<countOfProducts; i++){
           const productText= await this.products.nth(i).locator("b").textContent()
           if(productText === productName){
                await this.products.nth(i).locator("button").last().click()
                break;
           }
        }
    }

    async searchAndValidateProductDetails(productName:string){
        await this.products.last().waitFor()
        const countOfProducts = await this.products.count()

        for(let i=0; i<countOfProducts; i++){
           const productText= await this.products.nth(i).locator("b").textContent()
           if(productText === productName){
                await this.products.nth(i).locator("button").first().click()
                break;
           }
        }
    }
    


}
