import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PrincipalServices {
 
    public url: string; //url de la ruta de la api


    /**
     * 
     * @param _http inyeccion de variable http
     */
    constructor(private _http: HttpClient) {
        
    }

    /**
     * metodo para consultar usuarios
     */
    consultarUsuarios() {
        //url de la direccion de la api de usuarios
        return this._http.get('https://jsonplaceholder.typicode.com/users');
    }


}