import React from 'react';
export type RefForwardWithStatic<Props, Ref, Static> = React.ForwardRefExoticComponent<Props & React.RefAttributes<Ref>> & Static;
