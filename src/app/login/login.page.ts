import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	credentials: any = {};

	constructor(

	) { }

	ngOnInit() {

	}

	async login() {
	/* 	const loading = await this.loadingController.create();


		this.authService.serverLogin(this.credentials.value).subscribe(
			async (res) => {
				console.log(" ress ==> ", res)
				this.loadingController.dismiss();
				if (!res.idUsuario) {
					this.loadingController.dismiss();
					const alert = await this.alertController.create({
						header: 'Login failed',
						message: "CONTRASENA INCORRECTA",
						buttons: ['OK']
					});

					await alert.present();
					return;
				}

				Preferences.set({ key: "reUser", value: res.idUsuario });
				if(res.estado == "REGISTRADO"){
					this.router.navigate(['/cambiar-contrasena']);
					return;
				}
				if(res.estado == "A"){
					await this.storage.setParameter();
					await this.storage.init();
					const isPushNotificationsAvailable = Capacitor.isPluginAvailable('PushNotifications');

					if (isPushNotificationsAvailable) {
						await this.pushNotificacion.registerNotifications();
					}

					this.router.navigateByUrl('/renovacion/listado-operacion', { replaceUrl: true });
					return;
				}
				const alert = await this.alertController.create({
					header: 'Login failed',
					message: "TU USUARIO ESTA DESACTIVADO COMUNICATE CON TU ASESOR",
					buttons: ['OK']
				});

				await alert.present();
				return;

			},
			async (res) => {
				this.loadingController.dismiss();
				const alert = await this.alertController.create({
					header: 'Login failed',
					message: res.error.error,
					buttons: ['OK']
				});

				await alert.present();
			}
		); */
	}

	// Easy access for form fields
	get idUsuario() {
		return this.credentials.get('idUsuario');
	}

	get contrasena() {
		return this.credentials.get('contrasena');
	}

	olvideContrasena() {
		//this.router.navigate(['/olvide-contrasena']);

	}
	registrarse() {

		//this.router.navigate(['/registrar']);

	}
}
