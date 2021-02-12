import Route from '@ember/routing/route'

export default class IndexRoute extends Route {
    async model() {
        return {
            title: 'The Blue Orange', 
            price: 'Ingen avgift', 
            general: 'Det bästa du någonsin sett', 
            address: 'Södergatan 2', 
            location: {
                lat: 58.26075118248057, 
                lng: 12.952193748904413,
            },
            store: 'God kaffe och Italiensk glass', 
            image: 'https://jvgfoto.se/foto/00016494q.jpg' 
        }
    }   
}