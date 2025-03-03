// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type MCPTestResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Successful operation
	Pet *components.Pet
}

func (o *MCPTestResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *MCPTestResponse) GetPet() *components.Pet {
	if o == nil {
		return nil
	}
	return o.Pet
}
