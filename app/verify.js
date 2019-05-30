
const verify = {
    process: async (method) => {
        try {
            switch (method) {
                case funnel:
                    await verify.funnel();
                    break;
                default:
                    break;
            }
            return;
        } catch (error) {
            throw error;            
        }
    },
    funnel: () => {

    }
}

module.exports = verify;