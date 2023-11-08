import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        'assignment' : Assignment,
        'assignment-tags' : AssignmentTags,
    },

    template: `
        <section v-show="show && assignments.length"
            class="w-72 bg-gray-700 p-4 border border-gray-400 rounded-lg"
        >
            <div class="flex justify-between item-start">
                <h2 class="font-bold mb-2" >
                    {{ title }}
                    <span>({{ assignments.length }})</span>
                </h2>
                <button v-show="canToggle" @click="show = false" >&times;</button>
            </div>

            <assignment-tags
                :tags="tags"
                v-model="currentTag"
            ></assignment-tags>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">
                <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                >
                </assignment>
            </ul>

            <span class="text-yellow-500"
                v-show="filteredAssignments.length == 0"
            >No '{{ title }}' assignments in '{{ currentTag }}' tag</span>


            <slot></slot>


        </section>
    `,

    data() {
        return {
            'currentTag' : 'all',
            'show' : true,
        }
    },

    props: {
        assignments: {
            type: Array,
            default: [],
        },
        title: String,
        tags: Array,
        canToggle: {type: Boolean, default: true}
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            } else {
                return this.assignments.filter(assignment => assignment.tags.includes(this.currentTag));
            }
        }
    }
}