import { useClipPathStyles } from './ClipPath.styles'

const ClipPath = () => {
    const { classes } = useClipPathStyles()

    return (
        <div className={classes.root}>
            <svg className={classes.shape} viewBox='0 0 100 30'>
                <polygon points='0 0, 100 0, 100 20, 0 30' />
            </svg>
        </div>
    )
}

export default ClipPath
