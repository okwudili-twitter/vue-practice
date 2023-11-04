export default {
    template : `
        <button
            :class="{
                'border rounded p-1 px-2 disabled:cursor-not-allowed' : true,
                'bg-gray-200 hover:bg-gray-400' : btn_type === 'muted',
                'bg-blue-200 hover:bg-blue-400' : btn_type === 'primary',
                'bg-yellow-200 hover:bg-yellow-400' : btn_type === 'warning',
                'bg-green-200 hover:bg-green-400' : btn_type === 'success',
                'bg-red-200 hover:bg-red-400' : btn_type === 'danger',
                'is_loading' : processing
            }"

            :disabled="processing"
        >
            <slot />
        </button>
    `,

    props : {
        btn_type : {
            type: String,
            default: 'primary',
        },
        processing: {
            type: Boolean,
            default: false,
        }
    },
}