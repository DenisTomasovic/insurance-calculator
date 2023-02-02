import { Box, Flex, Paper } from '@mantine/core'
import { useCallback, useState } from 'react'
import { useHeroSectionStyles } from './HeroSection.styles'
import HeroContent from './hero-content/HeroContent'
import HeroForm from './hero-form/HeroForm'
import InsuranceFlowContext from '../../context/insurance-flow-context/InsuranceFlowContext'

const HeroSection = () => {
    const { classes } = useHeroSectionStyles()

    const [finalValue, setFinalValueState] = useState<string>('')

    const setFinalValue = useCallback((value: string) => {
        setFinalValueState(value)
    }, [])

    return (
        <InsuranceFlowContext.Provider value={{ finalValue, setFinalValue }}>
            <Box className={classes.outer}>
                <Paper radius='md' p='xl' pos='relative' withBorder>
                    <Flex className={classes.inner} gap='xl'>
                        <HeroForm />
                        <HeroContent value={finalValue} />
                    </Flex>
                </Paper>
            </Box>
        </InsuranceFlowContext.Provider>
    )
}

export default HeroSection
