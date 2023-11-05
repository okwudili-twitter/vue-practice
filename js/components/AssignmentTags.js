export default {
    template : `
        <div class="flex flex-wrap gap-1 " style="width: 230px">
            <button
                :key="1000000"
                @click="$emit('updateCurrentTag', 'all')"
                :class="{
                    'border rounded px-1 py-px text-xs' : true,
                    'text-blue-500 border-blue-500' : currentTag == 'all',
                } "
            >
                all
            </button>

            <button
                v-for="tag in tags"
                :key="tag.id"
                @click="$emit('updateCurrentTag', tag.name)"
                :class="{
                    'border rounded px-1 py-px text-xs' : true,
                    'text-blue-500 border-blue-500' : currentTag == tag.name,
                } "
            >
                {{ tag.name }}
            </button>
        </div>
    `,

    props: {
        tags: Array,
        currentTag: String,
    },
}