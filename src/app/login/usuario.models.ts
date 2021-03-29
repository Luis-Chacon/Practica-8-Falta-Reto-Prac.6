import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class Usuario
{
    constructor(
        public id: string,
        public email: string,
        private _token: string,
        private tokenExpiration: Date
    ){}

    get token()
    {
        if(!this.tokenExpiration || this.tokenExpiration <= new Date())
        {
            return null;
        }

        return this._token;
    }
}