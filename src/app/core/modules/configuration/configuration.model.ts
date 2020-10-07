interface ConfigurationInterface {
    preferences: PreferencesInterface;
}

interface PreferencesInterface {
    language: string;
}

export class Preferences implements PreferencesInterface {
    public language: string;

    constructor({
        language
    }: {
        language?: string;
    }) {
        this.language = language;
    }
}

export class Configuration implements ConfigurationInterface {
    public preferences: Preferences;

    constructor({
        preferences
    }: {
        preferences?: Preferences;
    }) {
        this.preferences = preferences;
    }
}
