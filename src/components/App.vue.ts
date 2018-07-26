import Vue from "vue";
import Component from "vue-class-component";

@Component({
	template: `
        <div @click='onClick'>{{ test }}</div>
    `
})
export default class App extends Vue {
	public test: string = "Hey =)";

	public onClick(): void {
		window.alert(this.test);
	}
}
