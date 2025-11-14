const Templates = require('./resources/Templates');
const { DEFAULT_BASE_URL } = require('./constants');
const HttpClient = require('./utils/httpClient');

class Docstron {
    /**
     * Create new Docstron client
     * @param {string} apiKey - Your Docstron API key
     * @param {Object} [Options] - Configuration options
     * @param {string} [Options.baseURL] - Custom base URL
     */
    constructor(apiKey, options = {}) {
        if (!apiKey) {
            throw new Error('API key is required');
        }

        this.apiKey = apiKey;
        this.baseURL = options.baseURL || DEFAULT_BASE_URL;

        const httpClient = new HttpClient(this.apiKey, this.baseURL);

        // v0.1.0 - Templates Only
        this.templates = new Templates(httpClient);
    }

    /**
     * Get the current SDK version
     * @returns {string} version number
     */
    static getVersion() {
        return '0.1.0';
    }
}

module.exports = Docstron;