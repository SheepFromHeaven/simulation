import * as React from 'react';
import {ResourceAmount} from './ResourceAmount/ResourceAmount';
import {Resource} from '../../../modules/resources/Resource';

interface TopbarProps {
  resources: Resource[];
}

interface TopbarState {

}

export class Topbar extends React.Component<TopbarProps, TopbarState> {
  render() {
    const {resources} = this.props;
    return (
      <div>
        {resources.map((resource, i) => <ResourceAmount key={i} resource={resource}/>)}
      </div>
    );
  }
}
