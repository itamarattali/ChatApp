import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'    
})
export class LoginService {
    private name: string = '';

    getName(): string {
        return this.name;
    }

    changeName(name: string) {
        this.name = name;
    }

    resetName() {
        this.name = '';
    }
}