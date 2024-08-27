import styles from '@/styles/app.module.scss'
import { Phone } from '@/types/index'
import clsx from 'clsx'
export default function PhoneComponent({ image, phone }:{image:any, phone:Phone}) {
	return (
		<div ref={image} className={styles.iphone_x}>
			<div className='w-full'>
				<div id='phone'>
					<div>
						<div className={styles.phone_bar}>
							<div className={styles.bar_time}>
								<>{phone.dateTime.format('HH:mm')}</>
							</div>
							<div className={clsx(styles.bar_signal, styles[`signal_${phone.signal}`])}></div>
							<div className={clsx(styles.bar_networks, styles[`${phone.network}_${phone.wifi}`])}>
								{phone.network}
							</div>
							<div className={styles.bar_battery}>
								<div
									style={{ width: `${phone.battery}%` }}
									className={clsx(
										styles.battery,
										phone.charge == '1' && styles.charge,
										phone.battery < 20 && styles.low
									)}
								>
									电量
								</div>
							</div>
						</div>
						<div className={styles.phone_nav}></div>
					</div>
					<div className='phone-bg'></div>
					<div className='phone-water'></div>
					<div className='phone-body'></div>
					<div className='phone-bottom'></div>
				</div>
			</div>
		</div>
	)
}

