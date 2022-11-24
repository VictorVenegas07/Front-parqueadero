export const navbarHomeData = [
    {
        ruta: '/',
        pagina: 'Inicio',
        subrutas: []
    },
    {
        ruta: '',
        pagina: 'Reservar',
        subrutas: [
            {
                namepage:'solicitar',
                ruta: 'solicitar/reserva'
            },
            {
                namepage: 'consultar',
                ruta: 'solicitar/consulta/reservas'
            },
            
        ]
    },
    {
        ruta: '/login',
        pagina: 'Inicia sesión',
        subrutas: []
    },
] 