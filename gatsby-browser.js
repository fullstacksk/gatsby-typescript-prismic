/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"
import React from 'react';
import AuthProvider from "./src/context/auth";


export const wrapRootElement = ({ element }) => {
    return <AuthProvider>{ element}</AuthProvider>
}
