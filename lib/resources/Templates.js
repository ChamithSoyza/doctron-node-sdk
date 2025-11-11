class Templates {
    constructor(httpClient) {
        this.http = httpClient;
    }

    /**
     * Create a new Template
     * @param {Object} params - Template parameters
     * @param {string} params.application_id - The application ID
     * @param {string} params.name - Template name
     * @param {string} params.content - HTML content with 
     * @param {boolean} [params.is_active=true] - Whether template is active
     * @param {string} [params.extra_css] - Additional CSS Styling
     * @returns {Promise<Object>} - Created Template
     */

    async create(params) {
        this._validateCreateParams(params);
        const response = await this.http.post('/v1/templates', params);
        return response.data;
    }

    /**
     * Get Template by ID
     * @param {string} templateId - The template ID
     * @returns {Promise<Object>} - Template details
     */

    async get(templateId){
        if(!templateId){
            throw new Error('Template ID is required.');            
        }

        const response = await this.http.get(`v1/templates/${templateId}`);
        return response.data;
    }
}

