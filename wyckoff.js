const WyckoffParams = {
    accumulationFrequency: 0.02,
    consolidationFrequency: 0.02,
    distributionFrequency: 0.02,

    save() {
        localStorage.setItem('wyckoffParams', JSON.stringify(this));
    },

    load() {
        const savedParams = localStorage.getItem('wyckoffParams');
        if (savedParams) {
            Object.assign(this, JSON.parse(savedParams));
        }
    },

    update(newParams) {
        Object.assign(this, newParams);
        this.save();
    }
};

// Initialize Wyckoff parameters
WyckoffParams.load();
