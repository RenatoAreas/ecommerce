import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from "./produtos/produtos.component";
import { CarrinhoComprasComponent } from "./carrinho-compras/carrinho-compras.component";
import { CadastroClientesComponent } from "./cadastro-clientes/cadastro-clientes.component";
import { FinalizarPedidoComponent } from "./finalizar-pedido/finalizar-pedido.component";
import { LoginComponent } from "./login/login.component";

//criando as rotas para acessar cada componente
const routes: Routes = [
    {
        path: '', //raiz do projeto
        component: ProdutosComponent
    },
    {
        path: 'carrinho-compras', //caminho da rota
        component: CarrinhoComprasComponent
    },
    {
        path: 'cadastro-clientes', //caminho da rota
        component: CadastroClientesComponent
    },
    {
        path: 'finalizar-pedido', //caminho da rota
        component: FinalizarPedidoComponent
    },
    {
        path: 'login', //caminho da rota
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }