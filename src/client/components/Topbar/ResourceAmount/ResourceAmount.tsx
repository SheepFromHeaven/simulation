import * as React from 'react';
import {Resource} from '../../../../modules/resources/Resource';

interface ResourceAmountProps {
  resource: Resource
}

interface ResourceAmountState {

}

export class ResourceAmount extends React.Component<ResourceAmountProps, ResourceAmountState> {
  render() {
    const {amount, type} = this.props.resource;
    return (
      <div className="resource-amount">
        {type}: {amount}
      </div>
    );
  }
}
