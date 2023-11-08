export default {
    template: `
        <form @submit.prevent="add" class="mt-4" >
            <div class="text-black bg-white flex justify-between ">
                <input v-model="new_assignment" required placeholder="New Assignment..." class="p-2" />
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>

            <p>Tags:</p>

            <div class="flex flex-wrap space-x-4">

                <label v-for="tag in tags" :key="tag.id" class="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        :value="tag.name"
                        :name="tag.name"
                        class="form-checkbox text-indigo-600 "
                        v-model="new_tags"

                    />
                    <span>{{ tag.name }}</span>
                </label>

            </div>

            <small v-show="error" class="text-red-500" >{{ error }}</small>
            <small v-show="noTagSelected" class="text-red-500" >Select at least 1 (one) tag!</small>
        </form>
    `,

    data() {
        return {
            'new_assignment' : '',
            'new_tags' : [],
            'noTagSelected' : false
        }
    },

    emits: ['add'],

    props: {
        error : {
            type: String,
            default: ''
        },
        tags: {
            type: Array
        }
    },

    methods: {
        add() {
            if (this.new_tags.length === 0) {
                // No tag is selected, show an error message.
                this.noTagSelected = true;
            } else {
                this.noTagSelected = false;
                this.$emit('add', this.new_assignment, this.new_tags);
                this.new_assignment = '';
                this.new_tags = [];
            }

        }
    }

}