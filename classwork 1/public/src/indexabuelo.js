import './components/indexpadre.js';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .card-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    gap: 16px;
                    width: 100%;
                }
            </style>
            <div class="card-container">
                <product-card
                    img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/kj6n1mmv5i3yqjvk6f56"
                    alt="Amiibo de The Legend of Zelda"
                    title="The Legend of Zelda amiibo"
                    description="Potencia tu juego con los amiibo de la colección The Legend of Zelda."
                    txtbutton="¡Completa tu colección!"
                ></product-card>

                <product-card
                    img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/afdfdrgq8i4dpnere9h5"
                    alt="Promoción de suscripción online"
                    title="Megapromoción 12+2"
                    description="2 meses adicionales al comprar cualquier suscripción de 12 meses."
                    txtbutton="Ver más detalles"
                ></product-card>

                <product-card
                    img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/lvk7zz3tlmx5gqhpgf5r"
                    alt="Mando de Nintendo 64"
                    title="Mando de Nintendo 64"
                    description="Disfruta de los juegos de Nintendo 64 de la forma en que se deben jugar: ¡con un mando inalámbrico de tamaño completo de Nintendo 64!"
                    txtbutton="Comprar"
                ></product-card>
            </div>
        `;
    }
}

customElements.define('app-container', AppContainer);
