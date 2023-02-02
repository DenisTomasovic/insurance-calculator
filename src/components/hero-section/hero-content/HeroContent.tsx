import { Box, Card, Text, Title } from '@mantine/core'
import { useHeroContentStyles } from './HeroContent.styles'

type HeroContentProps = {
    value: string
}

const HeroContent = ({ value }: HeroContentProps) => {
    const { classes } = useHeroContentStyles()

    return (
        <Box className={classes.content}>
            <Title className={classes.title}>
                Výpočet poistenia online
            </Title>
            <Text color='dimmed' mt='md'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Animi beatae distinctio ducimus enim eum ex, exercitationem
                facilis illum in, iste magnam magni officia perferendis
                perspiciatis porro provident quos temporibus veniam.
            </Text>

            {value && (
                <Card radius='md' p='xl' mt='xl' withBorder>
                    <Text size='xs' transform='uppercase' weight={700} color='dimmed'>
                        Odhadovaná suma poistenia
                    </Text>
                    <Text size='lg' weight={500}>
                        {value}€
                    </Text>
                </Card>
            )}
        </Box>
    )
}

export default HeroContent
