import styles from '@/styles/app.module.scss'
import { Phone } from '@/types/index'
import clsx from 'clsx'

export default function PhoneComponent({ image, phone }: { image: any; phone: Phone }) {
	return (
		<div ref={image} className={styles.iphone_x}>
			<div id={styles.phone}>
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
					<div className={styles.phone_nav}>
						<div className={styles.left}>
							<div className={styles.back}></div>
							{phone.messages != '0' && <span>{phone.messages}</span>}
						</div>
						<div className={styles.center}>
							<span>{phone.title}</span>
							<i className={clsx(phone.earphone == '1' && styles.earphone)}></i>
						</div>
						<div className={styles.right}>
							<div></div>
						</div>
					</div>
				</div>
				<div className={styles.phone_body}>
					<div className={styles.phone_bg}>
						{phone.bgImage && <img src={phone.bgImage} alt='background_image' className={styles.bg_image}/>}
					</div>
				</div>
				<div className={styles.phone_bottom}>
					<div className={styles.bottom_chat}>
						<div
							className={clsx(styles.icon, phone.voice == '0' ? styles.voice : styles.keyboard)}
						></div>
						<div className={clsx(styles.input)}>按住 说话</div>
						<div className={clsx(styles.icon, styles.emoji)}></div>
						<div className={clsx(styles.icon, styles.more)}></div>
					</div>
					<div className={styles.bottom_bar}>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	)
}

