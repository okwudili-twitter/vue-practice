export default {
    template: `
        <form @submit.prevent="add" >
            <div class="border border-gray-600 text-black">
                <input v-model="new_assignment" required placeholder="New Assignment..." class="p-2" />
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
            <small v-show="error" class="text-red-500" >{{ error }}</small>
        </form>
    `,

    data() {
        return {
            'new_assignment' : ''
        }
    },

    emits: ['add'],

    props: {
        error : {
            type: String,
            default: ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.new_assignment);
            this.new_assignment = ''
        }
    }

}