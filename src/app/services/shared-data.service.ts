import { Injectable } from '@angular/core';
import { BehaviorSubject }    from 'rxjs';

/**
 * Importante recordar:
 * 1 -> La variable private es la que almacena el valor a transferir entre componentes
 * 2 -> La variable con el $ es la variable intermedia para recuperar ese valor, es como la función get de una clase en java por ejemplo
 * 3 -> Función para cambiar el valor de la variable, como la función set de java por seguir con el ejemplo.
 */
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  /**
   * En clase vimos para utilizar el objeto Subject<T>() donde T es el tipo de objeto que estamos pasando pero vimos que solo funcionaba si 
   * trabajabamos dentro de una misma vista, es decir que los componentes estén renderizandose a la vez. Esto es útil cuando tenemos un componente menú lateral 
   * con su propio <router-outlet> a parte del principal que tiene la aplicación en el Appcomponent (componente principal) o componentes padres-hijo
   * 
   * En el caso de ser dos componentes totalmente separados se usara el objeto BehavoirSubject(T) donde T será un valor del tipo que queramos pasar,
   * en este caso será number por lo que le paso el valor 0
   */
  private marcador = new BehaviorSubject(0);

  // Observable. Variable intermedia que recupera el valor de la variable principal. Lo usaremos en el componente para recuperar el valor de la variable
  marcador$ = this.marcador.asObservable();

  // Función para cambiar el valor de la variable principal. Importante no olvidar la función .next() para cambiar ese valor
  changeMarcador(marcador: number) {
    this.marcador.next(marcador);
  }

}
