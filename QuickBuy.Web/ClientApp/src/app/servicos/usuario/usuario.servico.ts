import { Injectable, inject, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, observable } from "rxjs";
import { Usuario } from "../../modelo/usuario";

@Injectable({
  providedIn: "root" 
}) 
export class UsuarioServico {

  private baseURL: string;
  private _usuario: Usuario;

  set usuario(usuario: Usuario) {
    sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
    this._usuario = usuario;
  }

  get usuario(): Usuario {
    let usuario_jason = sessionStorage.getItem("usuario-autenticado");
    this._usuario = JSON.parse(usuario_jason);
    return this._usuario;
  }

  //Check usuario
  public usuario_autenticado(): boolean {
    return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";
  }

  //Limpar Sessão
  public limpar_sessao() {
    sessionStorage.setItem("usuario-autenticado", "");
    this._usuario = null;
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseURL = baseUrl;
  }

  public verificarUsuario(usuario: Usuario): Observable<Usuario> {

    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      email: usuario.email,
      senha: usuario.senha
    }
    //this.baseURL = raiz do site que pode ser exemplo.: http://www.quickbuy.com/
    return this.http.post<Usuario>(this.baseURL + "api/usuario/VerificarUsuario", body, { headers });
  }

  public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {

    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      email: usuario.email,
      senha: usuario.senha,
      nome: usuario.nome,
      sobremenome: usuario.sobreNome
    }
    return this.http.post<Usuario>(this.baseURL + "api/usuario", body, { headers })
  }
}
