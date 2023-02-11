import axios from 'axios';

export class Cronuseo {
  private endpoint: string;
  private organization: string;
  private token: string;

  constructor(endpoint: string, organization: string, token: string) {
    this.endpoint = endpoint;
    this.organization = organization;
    this.token = token;
  }

  async CheckPermission(username:string, permission:string, resource:string) {

    try {
      const response = await axios.post(`${this.endpoint}/${this.organization}/permission/check/username`, {
        username: username,
        permission: permission,
        resource: resource,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'API_KEY': this.token
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async CheckPermissions(username:string, permissions:string[], resource:string) {

    const headers = {
        'Content-Type': 'application/json',
        'API_KEY': this.token
      }

    try {
      const response = await axios.post(`${this.endpoint}/${this.organization}/permission/check/multi_actions`, {
        username:username,
        permissions: permissions.map((permission) => {return {permission: permission}}),
        resource: resource,
      }, {
        headers: headers
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default Cronuseo;
