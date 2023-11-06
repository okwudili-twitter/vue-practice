export default {
    template: `
        <li>
            <label class="p-2 flex items-center justify-between " >
                {{ assignment.name }}

                <input type="checkbox" class="ml-1" v-model="assignment.completed" >
            </label>
        </li>
    `,

    props: {
        assignment: Object,
    }
}