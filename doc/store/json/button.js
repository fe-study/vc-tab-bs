export default {
	button: {
		code: {
			html: `
					<v-button>default</v-button>
                   	<v-button v-class='is-primary'>primary</v-button>
                   	<v-button v-class='is-info'>info</v-button>
                   	<v-button v-class='is-warning'>warning</v-button>
                   	<v-button v-class='is-danger'>danger</v-button>
                   	<v-button v-class='is-link'>link</v-button>
                   	`
		}
	},
	buttonGroup: {
		code: {
			html: `
					<v-button-group v-class="is-small">
                        <v-button v-class='is-primary is-outlined'>按钮</v-button>
                        <v-button v-class='is-primary is-loading'>按钮</v-button>
                        <v-button v-class='is-primary is-disabled'>按钮</v-button>
                    </v-button-group>
                    <v-button-group v-class="is-large">
                        <v-button v-class='is-info is-outlined'>按钮</v-button>
                        <v-button v-class='is-info is-loading'>按钮</v-button>
                        <v-button v-class='is-info is-disabled'>按钮</v-button>
                    </v-button-group>
					`
		}
	},
	buttonToolbar: {
		code: {
			html: `
					<v-button-toolbar>
                        <v-button-group>
                            <v-button>1</v-button>
                            <v-button>2</v-button>
                            <v-button>3</v-button>
                            <v-button>4</v-button>
                        </v-button-group>
                        <v-button-group>
                            <v-button>5</v-button>
                            <v-button>6</v-button>
                            <v-button>7</v-button>
                            <v-button>8</v-button>
                        </v-button-group>
                    </v-button-toolbar>
				`
		}
	}
}