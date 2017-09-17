import * as React from 'react';
import {Resource} from '../../../core/entities/Resource';
import {ResourceAmount} from './ResourceAmount/ResourceAmount';

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
