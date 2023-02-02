import { Container } from '@mantine/core'
import ClipPath from '../clip-path/ClipPath'
import React, { PropsWithChildren } from 'react'

type DefaultLayoutProps = PropsWithChildren

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <Container>
            <ClipPath />
            {children}
        </Container>
    )
}

export default DefaultLayout
