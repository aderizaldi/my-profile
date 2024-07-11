export interface AlertProps {
    type: 'success' | 'error';
    message: string;
}

export const Alert = ({ type, message }: AlertProps) => {
    const alertType = type === 'success' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700';

    return (
        <div className={`border-l-4 p-4 ${alertType} mb-4`} role="alert">
            <p className="font-bold">{type === 'success' ? 'Sukses' : 'Error'}</p>
            <p>{message}</p>
        </div>
    );
};