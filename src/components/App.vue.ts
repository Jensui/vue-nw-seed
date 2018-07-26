import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    template: `
        <div @click='onClick'>{{ test }}</div>
    `
})
export default class App extends Vue {
    test: string = 'Hey =)';

    onClick(): void {
        window.alert(this.test);
    }
}
