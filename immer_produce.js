function produce(state, producer) {
    const store = new Store(state);
    const proxy = new Proxy(store, handler);
    producer(proxy);
    const newState = proxy[FLAG];
    if (newState.modified) return newState.copy;
    return newState.source
}
const FlAG = '@@symbol_flag'
const handler = {
    get(target, key) {
        if (key === FLAG) return target;
        return target.get(key)
    },
    set(target, key, value) {
        return target.set(key, value)
    }
}
class Store {
    constructor(state) {
        this.modified = false;
        this.source = state;
        this.copy = null
    }

    get(key) {
        if (!this.modified) return this.source[key]
        return this.copy[key]
    }

    set(key, value) {
        if(!this.modified) this.modifing();
        return this.copy[key] = value;
    }

    modifing() {
        if (this.modified) return;
        this.modified = true;
        this.copy = Array.isArray(this.source)
        ? this.source.slice()
        : { ...this.source}
    }
}