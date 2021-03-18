import React from 'react';
import { Dashboard } from '../src/Dashboard';
import awsconfig from '../src/aws-exports-env';
import Amplify from 'aws-amplify';

Amplify.configure({...awsconfig, ssr: true});

export const Admin = function () {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default Admin