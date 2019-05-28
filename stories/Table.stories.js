import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Table } from 'src';

export const props = {};
export const actions = {};

storiesOf('Table', module).add('default', () => <Table {...props} {...actions} />);
