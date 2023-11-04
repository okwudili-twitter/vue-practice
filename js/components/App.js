import Assignments from './Assignments.js';
import MyButton from './MyButton.js';

export default {
    components: {
        'my-button' : MyButton,
        'assignments' : Assignments,
    },

    template: `
        <assignments></assignments>
    `,
}