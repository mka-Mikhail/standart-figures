const app = Vue.createApp({
	data() {
		return {
			slowWaltzFigures: [],
			tangoFigures: [],
			vienneseWaltzFigures: [],
			slowFoxtrotFigures: [
				{id: 1, name: `Extended Weave`, link: 'https://www.youtube.com/embed/UU1H572DRfg?si=aLtcgtXxN-0LaXSx&amp;start=0'},
				{id: 2, name: `Four Feathers`, link: 'https://www.youtube.com/embed/UU1H572DRfg?si=aLtcgtXxN-0LaXSx&amp;start=107'},
				{id: 3, name: `Three Fallaways`, link: 'https://www.youtube.com/embed/UU1H572DRfg?si=aLtcgtXxN-0LaXSx&amp;start=228'},
				{id: 4, name: `Three Fallaway's turning Left-Right-Left`, link: 'https://www.youtube.com/embed/UU1H572DRfg?si=aLtcgtXxN-0LaXSx&amp;start=354'},
				{id: 5, name: `Hover to PP from Feather Finish`, link: 'https://www.youtube.com/embed/UU1H572DRfg?si=aLtcgtXxN-0LaXSx&amp;start=479'},
				{id: 6, name: `Travelling Hover Cross Action to Feather Step`, link: 'https://www.youtube.com/embed/UU1H572DRfg?si=aLtcgtXxN-0LaXSx&amp;start=593'},
				{id: 7, name: `Hover Cross Action to Extended Weave Ending`, link: 'https://www.youtube.com/embed/UU1H572DRfg?si=aLtcgtXxN-0LaXSx&amp;start=694'},
			]
		}
	}
})

app.component('list-of-figures', {
	props: ['figures'],
	template: `
		<ul class="list-group list-group-flush">
			<li class="list-group-item" v-for="figure in figures" :key="figure.id">
				<figure-item :figure="figure"></figure-item>
			</li>
		</ul>
	`
})

app.component('figure-item', {
	props: ['figure'],
	template: `
		<h5>{{ figure.name }}</h5>
		<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#videoWindow">
  			Видео
		</button>
		<div class="modal" id="videoWindow" tabindex="-1">
  			<div class="modal-dialog modal-dialog-centered">
    			<div class="modal-content">
      				<div class="modal-body">
						<iframe width="450" height="300" :src="figure.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      				</div>
    			</div>
  			</div>
		</div>
	`
})

app.mount('#app')