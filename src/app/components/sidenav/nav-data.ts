export interface NavBarData{
    ruta:string
    icon:string
    pagina:string
}
export const NavBarData = [
    {
        ruta: 'dashboard',
        icon: 'fa-sharp fa-solid fa-house-user',
        pagina: 'Dashboard'
    }, {
        ruta: 'clientes',
        icon: 'fa-solid fa-user-group',
        pagina: 'Clientes'
    }, {
        ruta: 'vehiculos',
        icon: 'fa-solid fa-car-side',
        pagina: 'Vehiculos'
    },
    {
        ruta: 'reservas',
        icon: 'fa-solid fa-receipt',
        pagina: 'Reservas'
    },
    {
        ruta: 'tickets',
        icon: 'fa-solid fa-clipboard',
        pagina: 'Tickets'
    },
    {
        ruta: 'empleados',
        icon: 'fa-solid fa-user-tie',
        pagina: 'Empleados'
    },
    {
        ruta: 'puestos',
        icon: 'fa-solid fa-location-dot',
        pagina: 'Tuestos'
    },
    {
        ruta: 'tarifa',
        icon: 'fa-solid fa-dollar-sign',
        pagina: 'Tarifas'
    }

]