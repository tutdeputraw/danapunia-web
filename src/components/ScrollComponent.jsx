export const ScrollComponent = ({ component, marginBottom = '56px' }) => {
    return (
        <div
            style={{
                maxHeight: '100vh',
                overflowY: 'auto'
            }}
        >
            {component}
            <div style={{ height: `${marginBottom}` }}></div>
        </div>
    );
}