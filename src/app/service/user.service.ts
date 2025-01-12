 import { Injectable } from '@angular/core';
import {  ticket, UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private static instance: UserService

    private constructor(){
        

    }

        public static getInstance(){
            if(this.instance == null)
                this.instance = new UserService
            return this.instance
        }

    private retrievaAllUsers(): UserModel[]{
        let json=localStorage.getItem('users')
       
        if(json==null){
            const defaultUser={
                   name: 'Aleksandar',
                   surname: 'Ivkovic',
                 email: 'asd',
                    password:'asd' ,
                  adress: 'adresa',
                  phone: '12324',
                  date_of_birth: '05.05.2000',
                  cart: { sum_of_tickets: 0, all_tickets: [] } 

          }
            localStorage.setItem('users',JSON.stringify([defaultUser]))
           json = localStorage.getItem('users')
        }
        return JSON.parse(json!)
    }
    
    public createUser(model:UserModel){
    
            const arr = this.retrievaAllUsers()
            if(arr.find(user=>user.email === model.email))
                throw new Error('Email Already Exists')
            arr.push(model)
            localStorage.setItem('users',JSON.stringify(arr))
        
    }

    public login(email:string,password:string){
        const arr = this.retrievaAllUsers()
        const usr = arr.find(user=>user.email== email && user.password==password)
        if(!usr)
            throw new Error('Login Falied')

        sessionStorage.setItem('active',usr.email)
        
    }

    public getCurrentUser() {
       
        if(!sessionStorage.getItem('active'))
           throw new Error('No Active User')
        
        const email = sessionStorage.getItem('active')
        const arr = this.retrievaAllUsers()
        const usr = arr.find(user=>user.email == email)

        if(!usr)
            throw new Error('No Active User')
       

        
        return usr
    }

    

    public changePassword(password: string){
        const active=this.getCurrentUser()
        active.password=password

        const all = this.retrievaAllUsers()
        for(let user of all)
            if(user.email== active.email){
                user = active
            }

         localStorage.setItem('users',JSON.stringify(all))
    }

    public logout() {
        const usr = this.getCurrentUser()
        sessionStorage.removeItem('active')
    }

    public hasCurrentUser(){
        return sessionStorage.getItem('active')? true:false
    }

   
    public updateCurrentUser(user: UserModel) {
        const users = this.retrievaAllUsers();
        const index = users.findIndex((u) => u.email === user.email);
        if (index > -1) {
            users[index] = user;
            localStorage.setItem('users', JSON.stringify(users)); 
        }
    }
    getCurrentUserEmail(): string | null {
     
        const currentUser = this.getCurrentUser();  
        return currentUser ? currentUser.email : null;
    }

    addTicketToCart(newTicket: ticket): void {
        
        const users = JSON.parse(localStorage.getItem('users') || '[]'); 
    
        
        const currentUser = users.find((user: UserModel) => user.email === this.getCurrentUserEmail());
    
        if (currentUser) {
            
            if (!currentUser.cart) {
                currentUser.cart = {
                    sum_of_tickets: 0,
                    all_tickets: []
                };
            }
    
           
            if (!currentUser.cart.all_tickets) {
                currentUser.cart.all_tickets = []; 
            }
    
            
            currentUser.cart.all_tickets.push(newTicket);
            currentUser.cart.sum_of_tickets += newTicket.projection.price 
    
            
            localStorage.setItem('users', JSON.stringify(users));
        } else {
            console.error('Nema aktivnog korisnika');
        }
    }
    

    public getUserCart() {
        const currentUser = this.getCurrentUser();
        return currentUser ? currentUser.cart : null;
      }

      public cancelTicket(ticketToCancel: ticket): void {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const currentUser = users.find((user: UserModel) => user.email === this.getCurrentUserEmail());
    
        if (currentUser) {
            
            const ticket = currentUser.cart.all_tickets.find((t: ticket) => 
                t.projection.movieId === ticketToCancel.projection.movieId && 
                t.status === ticketToCancel.status
            );
    
            if (ticket) {
                currentUser.cart.sum_of_tickets -= ticket.projection.price;
                
                ticket.status = 'cancelled';
    
                
                localStorage.setItem('users', JSON.stringify(users));
            } else {
                console.error('Ticket not found in cart');
            }
        } else {
            console.error('No active user');
        }
    }
    
    
}